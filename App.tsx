mport React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './components/auth/AuthContext';
import Layout from './components/Layout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import DocumentList from './components/documents/DocumentList';
import DocumentUpload from './components/documents/DocumentUpload';
import DocumentEditor from './components/documents/DocumentEditor';
import SubscriptionPlans from './components/subscription/SubscriptionPlans';
import Subscribe from './components/subscription/Subscribe';
import ErrorBoundary from './components/common/ErrorBoundary';

// Protected route component that redirects to login if not authenticated
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="documents" element={<DocumentList />} />
          <Route path="documents/upload" element={<DocumentUpload />} />
          <Route path="documents/edit/:id" element={<DocumentEditor />} />
          <Route path="subscription" element={<SubscriptionPlans />} />
          <Route path="subscription/subscribe" element={<Subscribe />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
