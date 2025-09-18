import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Download, FileText, Calendar, BookOpen, Target, Info, Lock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const TMUAMockPapers = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Mock check for payment status - replace with actual payment verification
  useEffect(() => {
    // This would check against your payment records
    setHasAccess(false); // For demo, always false - implement your payment logic here
  }, [user]);

  const handlePaymentClick = () => {
    toast({
      title: "Payment Required",
      description: "Redirecting to payment page...",
    });
    // Add your payment integration here
  };

  const mockPapers = [
    {
      year: 'Mock Set A',
      papers: [
        { name: 'TMUA Mock Paper 1A + Solutions', restricted: true },
        { name: 'TMUA Mock Paper 2A + Solutions', restricted: true },
        { name: 'TMUA Mock Set A Complete', restricted: true }
      ]
    },
    {
      year: 'Mock Set B',
      papers: [
        { name: 'TMUA Mock Paper 1B + Solutions', restricted: true },
        { name: 'TMUA Mock Paper 2B + Solutions', restricted: true },
        { name: 'TMUA Mock Set B Complete', restricted: true }
      ]
    },
    {
      year: 'Mock Set C',
      papers: [
        { name: 'TMUA Mock Paper 1C + Solutions', restricted: true },
        { name: 'TMUA Mock Paper 2C + Solutions', restricted: true },
        { name: 'TMUA Mock Set C Complete', restricted: true }
      ]
    },
    {
      year: 'Mock Set D',
      papers: [
        { name: 'TMUA Mock Paper 1D + Solutions', restricted: true },
        { name: 'TMUA Mock Paper 2D + Solutions', restricted: true },
        { name: 'TMUA Mock Set D Complete', restricted: true }
      ]
    }
  ];

  const studyTips = [
    {
      icon: Target,
      title: "Exclusive Mock Exams",
      description: "Original papers created by Cambridge graduates with insider knowledge of exam patterns"
    },
    {
      icon: BookOpen,
      title: "Detailed Solutions",
      description: "Step-by-step explanations with alternative methods and common mistake analysis"
    },
    {
      icon: Calculator,
      title: "Performance Analytics",
      description: "Track your progress with detailed scoring breakdowns and improvement recommendations"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-full mb-6">
            <Lock className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            TMUA Mock Papers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exclusive mock papers created by Cambridge graduates. Practice with realistic exam conditions 
            and get detailed feedback to maximize your TMUA score.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-200">
              <Link to="/tmua" className="no-underline">
                Back to TMUA Overview
              </Link>
            </Button>
            <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-200">
              <Link to="/tmua/past-papers" className="no-underline">
                Free Past Papers
              </Link>
            </Button>
          </div>
        </div>


        {/* Pricing Banner */}
        <Card className="mb-12 bg-gradient-hero text-white border-0 shadow-elegant hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Mock Papers Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold mb-2">Single Mock Paper</h4>
                  <p className="text-3xl font-bold mb-2">£29</p>
                  <p className="text-white/80">Includes paper + solutions</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="text-xl font-semibold mb-2">Complete Mock Set</h4>
                  <p className="text-3xl font-bold mb-2">£50</p>
                  <p className="text-white/80">Both papers + solutions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mock Papers by Set */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Mock Papers by Set</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockPapers.map((setData, index) => (
              <Card key={setData.year} className="shadow-elegant hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Calendar className="h-5 w-5 text-yellow-600" />
                    {setData.year}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {setData.papers.map((paper, paperIndex) => (
                      <div key={paperIndex} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300 gap-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                          <span className="font-medium text-foreground">{paper.name}</span>
                          {paper.restricted && (
                            <Lock className="h-3 w-3 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            disabled
                            className="flex-1 sm:flex-none opacity-50"
                          >
                            <Lock className="h-4 w-4 mr-2" />
                            Locked
                          </Button>
                          <Button 
                            size="sm" 
                            onClick={handlePaymentClick}
                            className="bg-gradient-hero text-white border-0 hover:opacity-90 hover:scale-105 transition-all duration-200"
                          >
                            <CreditCard className="h-4 w-4 mr-2" />
                            Buy
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block bg-gradient-hero text-white border-0 hover:scale-[1.02] transition-all duration-300 shadow-elegant hover:shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Excel in Your TMUA?</h3>
              <p className="mb-6 text-white/90">
                Don't just practice with old papers. Train with exclusive mock exams created by Cambridge experts 
                who know exactly what examiners are looking for.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  onClick={handlePaymentClick}
                  className="w-full sm:w-auto hover:scale-105 transition-transform duration-200"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Get Mock Papers Access
                </Button>
                <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto hover:scale-105 transition-transform duration-200">
                  <Link to="/team#tmua" className="no-underline">Book Personal Tutoring</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TMUAMockPapers;