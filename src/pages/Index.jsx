import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const Index = () => {
  const [upcomingRetros, setUpcomingRetros] = useState([
    { id: 1, name: 'Sprint 23 Retro', date: '2023-05-15', time: '14:00' },
    { id: 2, name: 'Project X Review', date: '2023-05-18', time: '10:00' },
  ]);

  const [recentActionItems, setRecentActionItems] = useState([
    { id: 1, description: 'Update documentation', status: 'In Progress' },
    { id: 2, description: 'Schedule team building', status: 'Completed' },
    { id: 3, description: 'Investigate performance issue', status: 'Not Started' },
  ]);

  const teamMoodData = [
    { name: 'Mon', score: 7 },
    { name: 'Tue', score: 8 },
    { name: 'Wed', score: 6 },
    { name: 'Thu', score: 9 },
    { name: 'Fri', score: 8 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome to RetroBoost. Here's an overview of your team's activities.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Retrospectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {upcomingRetros.map((retro) => (
                <li key={retro.id} className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-teal-500" />
                  <span className="font-medium">{retro.name}</span>
                  <span className="ml-auto text-sm text-gray-500">
                    {retro.date} {retro.time}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Action Items</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recentActionItems.map((item) => (
                <li key={item.id} className="flex items-center">
                  <CheckCircle className={`mr-2 h-4 w-4 ${
                    item.status === 'Completed' ? 'text-green-500' :
                    item.status === 'In Progress' ? 'text-yellow-500' : 'text-gray-500'
                  }`} />
                  <span>{item.description}</span>
                  <span className={`ml-auto text-sm ${
                    item.status === 'Completed' ? 'text-green-500' :
                    item.status === 'In Progress' ? 'text-yellow-500' : 'text-gray-500'
                  }`}>
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Mood Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={teamMoodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="score" fill="#38B2AC" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">Schedule New Retrospective</Button>
      </div>
    </div>
  );
};

export default Index;