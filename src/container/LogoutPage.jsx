import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Alert } from '@mui/material';

const LogoutPage = () => {
    const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            return (
                <Alert severity="error">{err}</Alert>
            );
        }
    };

    onLogout();
};

export default LogoutPage;