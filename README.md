# Send Email - Next.js Full Stack Application

A comprehensive email campaign management system built with Next.js, featuring client management, contact lists, email campaigns, and AI-powered email generation.

## 🚀 Features

- **Client Management**: Add, edit, and manage client information
- **Contact Lists**: Import and manage contact lists via CSV
- **Email Campaigns**: Create and send email campaigns
- **AI Email Generation**: AI-powered email content creation using Google Gemini
- **Campaign Reports**: Track and analyze campaign performance
- **Investor Matching**: Match clients with potential investors
- **Authentication**: Firebase-based user authentication
- **Responsive Design**: Modern UI built with Ant Design and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Ant Design** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **Firebase** - Authentication and backend services

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **Firebase Admin** - Server-side Firebase integration
- **AWS SES** - Email sending service
- **Multer** - File upload handling

## 📁 Project Structure

```
send-email-nextjs-full/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   │   ├── dashboard/   # Dashboard routes
│   │   │   ├── reports/     # Report pages
│   │   │   └── layout.tsx   # Root layout
│   │   └── legacy_src/      # Legacy React components (migrated)
│   └── public/              # Static assets
├── backend/                  # Node.js backend server
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   └── server.js        # Main server file
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB
- Firebase project
- AWS account (for SES)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd send-email-nextjs-full
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` files in both frontend and backend directories:
   
   **Backend (.env)**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_PRIVATE_KEY=your_firebase_private_key
   FIREBASE_CLIENT_EMAIL=your_firebase_client_email
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   PORT=5000
   ```
   
   **Frontend (.env.local)**
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Start the servers**
   ```bash
   # Start backend (in one terminal)
   cd backend
   npm start
   
   # Start frontend (in another terminal)
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📱 Available Routes

### Frontend Routes
- `/` - Login page
- `/dashboard` - Main dashboard
- `/dashboard/manage-client` - Client management
- `/dashboard/all-client` - View all clients
- `/dashboard/add-client` - Add new client
- `/dashboard/select-campaign` - Campaign selection
- `/dashboard/allCampaign` - All campaigns
- `/dashboard/reports` - Campaign reports

### Backend API Routes
- `POST /api/auth/login` - User authentication
- `GET /api/clients` - Get all clients
- `POST /api/clients` - Create new client
- `GET /api/campaigns` - Get all campaigns
- `POST /api/campaigns` - Create new campaign
- `POST /api/send-email` - Send email campaign

## 🔧 Development

### Scripts

**Backend**
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload

**Frontend**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- ESLint configuration for code quality
- Prettier for code formatting
- TypeScript for type safety

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Heroku)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy and get your backend URL
4. Update frontend environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions, please open an issue in the GitHub repository or contact the development team.

## 🔄 Migration Notes

This project was migrated from a legacy React application to Next.js. The `legacy_src/` directory contains the original React components that have been adapted to work with Next.js routing and environment variables. "# Investor-outreach-platform-" 
