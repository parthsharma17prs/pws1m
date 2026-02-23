import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';

// Public screens
import { LandingScreen } from '../screens/LandingScreen';
import { AuthScreen } from '../screens/AuthScreen';

// Student screens
import { StudentDashboard } from '../screens/student/StudentDashboard';
import { ResumeAnalyzerScreen } from '../screens/student/ResumeAnalyzerScreen';
import { AICallingScreen } from '../screens/student/AICallingScreen';
import { MockInterviewScreen } from '../screens/student/MockInterviewScreen';
import { InterviewQuestionsScreen } from '../screens/student/InterviewQuestionsScreen';
import { AppliedJobsScreen } from '../screens/student/AppliedJobsScreen';
import { ATSScoreScreen } from '../screens/student/ATSScoreScreen';

// Company & Admin
import { CompanyDashboard } from '../screens/CompanyDashboard';
import { AdminDashboard } from '../screens/AdminDashboard';

const Stack = createNativeStackNavigator();

/**
 * Root navigator — switches between public (Landing/Auth) and
 * role-protected authenticated screens.
 */
export const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        {!user ? (
          // Public stack
          <>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
          </>
        ) : (
          // Authenticated stack — role determines which dashboard
          <>
            <Stack.Screen name="Dashboard" component={getDashboard(user.role)} />
            {user.role === 'student' && (
              <>
                <Stack.Screen name="ResumeAnalyzer" component={ResumeAnalyzerScreen} />
                <Stack.Screen name="AICalling" component={AICallingScreen} />
                <Stack.Screen name="MockInterview" component={MockInterviewScreen} />
                <Stack.Screen name="InterviewQuestions" component={InterviewQuestionsScreen} />
                <Stack.Screen name="AppliedJobs" component={AppliedJobsScreen} />
                <Stack.Screen name="ATSScore" component={ATSScoreScreen} />
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function getDashboard(role: string) {
  switch (role) {
    case 'company': return CompanyDashboard;
    case 'admin': return AdminDashboard;
    default: return StudentDashboard;
  }
}
