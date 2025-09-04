import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Calendar, MessageCircle, Heart } from 'lucide-react';

export function QuickActionsSection() {
    const navigate = useNavigate();

    return (
        <Card className="border-border shadow-soft">
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Button onClick={() => navigate('/services')} variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Learn about Anxiety
                </Button>
                <Button onClick={() => navigate('/resources')} variant="outline" className="w-full justify-start">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask a Question
                </Button>
                <Button onClick={() => navigate('/donate')} variant="outline" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Support Our Mission
                </Button>
            </CardContent>
        </Card>
    );
}
