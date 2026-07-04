# Azure Deployment Script for PromptWar Cooking App
# Prerequisite: Make sure you have run 'az login' first.

$RESOURCE_GROUP = "PromptWar-RG"
$LOCATION = "eastus"
# Generate a unique storage account name using random numbers
$RAND = Get-Random -Minimum 10000 -Maximum 99999
$STORAGE_ACCOUNT = "promptwar$RAND"

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "Starting Azure Deployment for PromptWar..." -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan

# 1. Check Azure Login status
Write-Host "Checking Azure Login status..." -ForegroundColor Yellow
$loginCheck = az account show --query name -o tsv 2>$null
if ($null -eq $loginCheck) {
    Write-Host "Error: You are not logged into Azure CLI." -ForegroundColor Red
    Write-Host "Please run 'az login' in your terminal first, then re-run this script." -ForegroundColor LightRed
    Exit
}
Write-Host "Logged into Azure Subscription: $loginCheck" -ForegroundColor Green

# 2. Create Resource Group
Write-Host "Creating Resource Group '$RESOURCE_GROUP' in $LOCATION..." -ForegroundColor Yellow
az group create --name $RESOURCE_GROUP --location $LOCATION -o table

# 3. Create Storage Account
Write-Host "Creating Storage Account '$STORAGE_ACCOUNT' (this may take a minute)..." -ForegroundColor Yellow
az storage account create `
    --name $STORAGE_ACCOUNT `
    --resource-group $RESOURCE_GROUP `
    --location $LOCATION `
    --sku Standard_LRS `
    --kind StorageV2 `
    --allow-blob-public-access true -o table

# 4. Enable Static Website Hosting
Write-Host "Enabling Static Website hosting..." -ForegroundColor Yellow
az storage blob service-properties update `
    --account-name $STORAGE_ACCOUNT `
    --static-website `
    --index-document index.html `
    --error-document index.html -o table

# 5. Upload files to $web container
Write-Host "Uploading application files (index.html, style.css, app.js)..." -ForegroundColor Yellow
az storage blob upload-batch `
    --account-name $STORAGE_ACCOUNT `
    --destination '$web' `
    --source . `
    --pattern "*.html" --overwrite true -o table

az storage blob upload-batch `
    --account-name $STORAGE_ACCOUNT `
    --destination '$web' `
    --source . `
    --pattern "*.css" --overwrite true -o table

az storage blob upload-batch `
    --account-name $STORAGE_ACCOUNT `
    --destination '$web' `
    --source . `
    --pattern "*.js" --overwrite true -o table

# 6. Retrieve Endpoint
$url = az storage account show `
    --name $STORAGE_ACCOUNT `
    --resource-group $RESOURCE_GROUP `
    --query "primaryEndpoints.web" `
    --output tsv

Write-Host "`n==============================================" -ForegroundColor Green
Write-Host "SUCCESS! Your app is deployed to Azure." -ForegroundColor Green
Write-Host "Website URL: $url" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Green
