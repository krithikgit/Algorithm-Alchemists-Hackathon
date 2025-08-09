# Learning Management System

A comprehensive full-stack learning management system with separate admin and trainee portals, built with Next.js, MongoDB, and TypeScript.

## Features

### Landing Page
- Modern, responsive design
- Portal selection (Admin/Trainee)
- Feature showcase
- Authentication integration

### Admin Portal
- Dashboard with analytics
- Student management with search & filter
- Course creation and management
- Department-wise progress tracking
- File upload system
- Student profile views with progress tracking

### Trainee Portal
- Personal dashboard
- Course enrollment and tracking
- Assignment tracker with due dates
- Coding challenges system
- Certificate and badge management
- AI Mentor for technical assistance
- Goal tracking and progress monitoring

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Custom JWT-based auth
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud instance)
- npm or yarn

## Database Setup

### Option 1: Local MongoDB Installation

1. **Install MongoDB locally:**
   - **Windows**: Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - **macOS**: `brew install mongodb-community`
   - **Linux**: Follow [MongoDB installation guide](https://docs.mongodb.com/manual/administration/install-on-linux/)

2. **Start MongoDB service:**
   \`\`\`bash
   # macOS/Linux
   brew services start mongodb-community
   # or
   sudo systemctl start mongod
   
   # Windows
   # MongoDB should start automatically as a service
   \`\`\`

3. **Verify MongoDB is running:**
   \`\`\`bash
   mongosh
   # Should connect to MongoDB shell
   \`\`\`

4. **Use this environment variable:**
   \`\`\`env
   MONGODB_URI=mongodb://localhost:27017/lms
   \`\`\`

### Option 2: MongoDB Atlas (Cloud)

If you prefer using MongoDB Atlas (cloud database):

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `.env.local`:
   \`\`\`env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/lms?retryWrites=true&w=majority
   \`\`\`

## Quick Start (Local Setup)

1. **Install MongoDB locally** (see above)
2. **Clone and setup project:**
   \`\`\`bash
   git clone <repository-url>
   cd learning-management-system
   npm install
   \`\`\`

3. **Create `.env.local`:**
   \`\`\`env
   MONGODB_URI=mongodb://localhost:27017/lms
   NEXTAUTH_SECRET=your-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   \`\`\`

4. **Start MongoDB** (if not already running):
   \`\`\`bash
   # macOS with Homebrew
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   
   # Windows - should start automatically
   \`\`\`

5. **Seed the database:**
   \`\`\`bash
   npm run seed
   \`\`\`

6. **Start the application:**
   \`\`\`bash
   npm run dev
   \`\`\`

7. **Access the application:**
   - Open http://localhost:3000
   - Use the default credentials provided below

## Default Credentials

After seeding the database, you can use these credentials:

**Admin:**
- Email: admin@learnhub.com
- Password: admin123

**Trainee:**
- Email: john@learnhub.com
- Password: trainee123

## Project Structure

\`\`\`
├── app/
│   ├── admin/              # Admin portal pages
│   ├── trainee/            # Trainee portal pages
│   ├── auth/               # Authentication pages
│   ├── api/                # API routes
│   └── page.tsx            # Landing page
├── components/
│   └── ui/                 # Reusable UI components
├── lib/
│   └── mongodb.ts          # Database connection
├── models/                 # Mongoose schemas
├── scripts/
│   └── seed-database.js    # Database seeding script
└── types/                  # TypeScript type definitions
\`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Admin
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/students` - Student list with filters
- `POST /api/admin/courses` - Create new course

### Trainee
- `GET /api/trainee/dashboard` - Dashboard data
- `GET /api/trainee/courses` - Enrolled courses
- `POST /api/trainee/assignments` - Submit assignment

### AI Mentor
- `POST /api/ai-mentor` - Chat with AI mentor

## Features in Detail

### Admin Portal Features
- **Dashboard**: Overview of students, courses, and progress
- **Student Management**: Search, filter, and manage trainees
- **Course Management**: Create, edit, and manage courses
- **Analytics**: Department-wise progress tracking
- **Upload System**: Upload course materials and assignments

### Trainee Portal Features
- **Dashboard**: Personal progress overview
- **Courses**: Browse and enroll in courses
- **Assignments**: Track due dates and submissions
- **Challenges**: Coding challenges with different difficulty levels
- **Certificates**: View earned certificates and badges
- **AI Mentor**: Get technical help and learning guidance
- **Profile**: Manage personal information and achievements

## Database Schema

### User Model
- Personal information (name, email, department)
- Role-based access (admin/trainee)
- Progress tracking
- Skills and achievements

### Course Model
- Course details and materials
- Assignments and deadlines
- Enrolled students
- Progress tracking

### Challenge Model
- Coding challenges with test cases
- Difficulty levels
- Student submissions and scores

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
