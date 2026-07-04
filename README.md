# 🍳 Indian Cooking Todo List & Planner

A highly polished, responsive client-side web application designed to help users generate a personalized cooking todo list based on their day's schedule density and budget.

## ✨ Features
- **Schedule-Aware Meal Planning**: Selects Breakfast, Lunch, and Dinner options based on daily schedule density (Low prep for busy days, high prep/gourmet for weekends).
- **Dynamic Budget Scaling**: शफ्फल्स and dynamically shuffles recipes in real-time as you slide the Daily Budget (₹100 to ₹1000).
- **Dietary Preference Matching**: Pure Veg, Non-Veg, Jain (No onion/garlic), and Eggitarian meal planning.
- **Smart Substitutions**: Interactive grocery checklist where items can be substituted with vegetarian, vegan, or Jain alternatives, updating costs instantly.
- **Kitchen Guide**: A step-by-step checklist matching the active meal plan.

---

## 🚀 Getting Started (Local Preview)

The application runs entirely client-side with zero external dependencies.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KunwarKp/promptwar.git
   cd promptwar
   ```

2. **Run a local web server**:
   You can serve the folder using Python:
   ```bash
   # If Python 3 is installed
   python -m http.server 8000
   
   # Or using Python 2
   python -m SimpleHTTPServer 8000
   ```

3. **Open in browser**:
   Navigate to **[http://localhost:8000](http://localhost:8000)**.

---

## ☁️ Deployment to Azure

You can deploy this site directly to Azure Static Web hosting in one command.

### Prerequisites
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) installed.
- Logged into your Azure account:
  ```powershell
  az login
  ```

### Deploy Command
Run the PowerShell deployment script inside the project folder:
```powershell
.\deploy.ps1
```
*The script will automatically create a Resource Group, instantiate a Storage Account, enable static website hosting, upload the files, and output your live URL.*
