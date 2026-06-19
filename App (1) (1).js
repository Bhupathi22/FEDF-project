import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import ScheduleBuilder from "./pages/ScheduleBuilder";
import Timesheet from "./pages/Timesheet";
import Overtime from "./pages/Overtime";
import PayrollSummary from "./pages/PayrollSummary";
import DepartmentReport from "./pages/DepartmentReport";
import LeaveManagement from "./pages/LeaveManagement";
import ExportData from "./pages/ExportData";
import Notifications from "./pages/Notifications";
import History from "./pages/History";
import AdminPanel from "./pages/AdminPanel";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/schedule"
                    element={
                        <ProtectedRoute>
                            <ScheduleBuilder />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/timesheet"
                    element={
                        <ProtectedRoute>
                            <Timesheet />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/overtime"
                    element={
                        <ProtectedRoute>
                            <Overtime />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/payroll"
                    element={
                        <ProtectedRoute>
                            <PayrollSummary />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/report"
                    element={
                        <ProtectedRoute>
                            <DepartmentReport />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/leave"
                    element={
                        <ProtectedRoute>
                            <LeaveManagement />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/export"
                    element={
                        <ProtectedRoute>
                            <ExportData />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/notifications"
                    element={
                        <ProtectedRoute>
                            <Notifications />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/history"
                    element={
                        <ProtectedRoute>
                            <History />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminPanel />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;