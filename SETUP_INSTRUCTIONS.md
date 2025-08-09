# Complete Setup Instructions - Backend & Frontend

## Prerequisites Installation

### 1. Install Node.js
- Download and install Node.js 18+ from [nodejs.org](https://nodejs.org/)
- Verify installation:
\`\`\`bash
node --version
npm --version
\`\`\`

### 2. Install MongoDB Locally

#### Windows:
1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Run the installer (.msi file)
3. Choose "Complete" installation
4. Install as Windows Service (recommended)
5. Install MongoDB Compass (optional GUI)

#### macOS:
\`\`\`bash
# Install using Homebrew
brew tap mongodb/brew
brew install mongodb-community
\`\`\`

#### Linux (Ubuntu/Debian):
\`\`\`bash
# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add MongoDB repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update and install
sudo apt-get update
sudo apt-get install -y mongodb-org
\`\`\`

## Project Setup

### Step 1: Clone/Create Project
\`\`\`bash
# Create project directory
mkdir learning-management-system
cd learning-management-system

# Initialize project (if not cloned)
npm init -y
\`\`\`

### Step 2: Install Dependencies
\`\`\`bash
# Install all required dependencies
npm install next@14.0.4 react@^18 react-dom@^18 typescript@^5
npm install @types/node@^20 @types/react@^18 @types/react-dom@^18
npm install tailwindcss@^3.3.0 postcss@^8 autoprefixer@^10.0.1
npm install @radix-ui/react-accordion@^1.1.2 @radix-ui/react-alert-dialog@^1.0.5
npm install @radix-ui/react-avatar@^1.0.4 @radix-ui/react-dialog@^1.0.5
npm install @radix-ui/react-dropdown-menu@^2.0.6 @radix-ui/react-label@^2.0.2
npm install @radix-ui/react-progress@^1.0.3 @radix-ui/react-scroll-area@^1.0.5
npm install @radix-ui/react-select@^2.0.0 @radix-ui/react-slot@^1.0.2
npm install @radix-ui/react-tabs@^1.0.4 class-variance-authority@^0.7.0
npm install clsx@^2.0.0 lucide-react@^0.294.0 mongoose@^8.0.3
npm install bcryptjs@^2.4.3 tailwind-merge@^2.2.0 tailwindcss-animate@^1.0.7
npm install @types/bcryptjs@^2.4.6 eslint@^8 eslint-config-next@14.0.4
\`\`\`

### Step 3: Create Configuration Files

#### Create `next.config.js`:
\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  }
}

module.exports = nextConfig
\`\`\`

#### Create `tailwind.config.ts`:
\`\`\`typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
\`\`\`

#### Create `postcss.config.js`:
\`\`\`javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
\`\`\`

#### Create `tsconfig.json`:
\`\`\`json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
\`\`\`

### Step 4: Create Environment Variables
Create `.env.local` file in root directory:
\`\`\`env
MONGODB_URI=mongodb://localhost:27017/lms
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
NEXTAUTH_URL=http://localhost:3000
\`\`\`

### Step 5: Create Global CSS
Create `app/globals.css`:
\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
\`\`\`

## Backend Setup

### Step 1: Start MongoDB Service

#### Windows:
\`\`\`bash
# MongoDB should start automatically as a service
# If not, run:
net start MongoDB
\`\`\`

#### macOS:
\`\`\`bash
brew services start mongodb-community
\`\`\`

#### Linux:
\`\`\`bash
sudo systemctl start mongod
sudo systemctl enable mongod  # To start on boot
\`\`\`

### Step 2: Verify MongoDB is Running
\`\`\`bash
# Connect to MongoDB shell
mongosh

# You should see connection successful message
# Type 'exit' to quit
\`\`\`

### Step 3: Seed the Database
\`\`\`bash
# Run the seeding script
npm run seed
\`\`\`

You should see output like:
\`\`\`
Connected to MongoDB
Cleared existing data
Created sample users
Created sample courses
Created sample challenges
Database seeded successfully!
Admin credentials: admin@learnhub.com / admin123
Trainee credentials: john@learnhub.com / trainee123
\`\`\`

## Frontend Setup & Running

### Step 1: Start Development Server
\`\`\`bash
npm run dev
\`\`\`

You should see:
\`\`\`
▲ Next.js 14.0.4
- Local:        http://localhost:3000
- Network:      http://192.168.1.xxx:3000

✓ Ready in 2.3s
\`\`\`

### Step 2: Access the Application
Open your browser and go to: `http://localhost:3000`

## Testing the Application

### 1. Landing Page
- Should load with portal selection options
- Click "Join as Trainee" or "Admin Portal"

### 2. Login with Test Credentials

#### Admin Login:
- Email: `admin@learnhub.com`
- Password: `admin123`
- Role: `Admin`

#### Trainee Login:
- Email: `john@learnhub.com`
- Password: `trainee123`
- Role: `Trainee`

### 3. Test Features

#### Admin Portal:
- Dashboard with statistics
- Student management
- Course creation
- Analytics view

#### Trainee Portal:
- Personal dashboard
- Course enrollment
- Assignment tracking
- AI Mentor chat
- Profile management

## Troubleshooting

### MongoDB Connection Issues:
\`\`\`bash
# Check if MongoDB is running
mongosh --eval "db.adminCommand('ismaster')"

# Check MongoDB logs
# Windows: Check Windows Event Viewer
# macOS: brew services list | grep mongodb
# Linux: sudo journalctl -u mongod
\`\`\`

### Port Already in Use:
\`\`\`bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
\`\`\`

### Clear Database and Reseed:
\`\`\`bash
# Connect to MongoDB
mongosh

# Drop database
use lms
db.dropDatabase()
exit

# Reseed
npm run seed
\`\`\`

## Production Deployment

### Environment Variables for Production:
\`\`\`env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lms
NEXTAUTH_SECRET=your-production-secret-key
NEXTAUTH_URL=https://yourdomain.com
\`\`\`

### Build for Production:
\`\`\`bash
npm run build
npm start
\`\`\`

## File Structure Verification

Make sure your project structure looks like this:
\`\`\`
learning-management-system/
├── app/
│   ├── admin/
│   ├── trainee/
│   ├── auth/
│   ├── api/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
├── lib/
│   └── mongodb.ts
├── models/
├── scripts/
│   └── seed-database.js
├── .env.local
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## Success Indicators

✅ MongoDB connects successfully
✅ Database seeding completes without errors
✅ Next.js development server starts on port 3000
✅ Landing page loads correctly
✅ Login works with test credentials
✅ Admin and trainee dashboards load
✅ No console errors in browser

If you encounter any issues, check the console output for error messages and refer to the troubleshooting section above.
