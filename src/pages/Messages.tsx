import { useAuth } from '@/hooks/useAuth';
import ConversationList from '@/components/ConversationList';
import { Navigate } from 'react-router-dom';

const Messages = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <ConversationList userId={user.id} />;
};

export default Messages;
