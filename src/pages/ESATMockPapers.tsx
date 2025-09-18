import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Download, FileText, Calendar, BookOpen, Target, Info, Lock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const ESATMockPapers = () => {
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
      description: 'Cambridge-style practice papers for ESAT preparation',
      papers: [
        { name: 'ESAT Mock Paper 1A', restricted: true },
        { name: 'ESAT Mock Paper 2A', restricted: true },
        { name: 'ESAT Mock Paper 3A', restricted: true },
        { name: 'Complete Solutions Set A', restricted: true },
        { name: 'Answer Key & Analysis', restricted: true }
      ]
    },
    {
      year: 'Mock Set B',
      description: 'Advanced practice with challenging engineering problems',
      papers: [
        { name: 'ESAT Mock Paper 1B', restricted: true },
        { name: 'ESAT Mock Paper 2B', restricted: true },
        { name: 'ESAT Mock Paper 3B', restricted: true },
        { name: 'Complete Solutions Set B', restricted: true },
        { name: 'Answer Key & Analysis', restricted: true }
      ]
    },
    {
      year: 'Mock Set C',
      description: 'Recent format papers with comprehensive explanations',
      papers: [
        { name: 'ESAT Mock Paper 1C', restricted: true },
        { name: 'ESAT Mock Paper 2C', restricted: true },
        { name: 'ESAT Mock Paper 3C', restricted: true },
        { name: 'Complete Solutions Set C', restricted: true },
        { name: 'Answer Key & Analysis', restricted: true }
      ]
    },
    {
      year: 'Mock Set D',
      description: 'Challenging papers for competitive advantage',
      papers: [
        { name: 'ESAT Mock Paper 1D', restricted: true },
        { name: 'ESAT Mock Paper 2D', restricted: true },
        { name: 'ESAT Mock Paper 3D', restricted: true },
        { name: 'Complete Solutions Set D', restricted: true },
        { name: 'Answer Key & Analysis', restricted: true }
      ]
    }
  ];

  const studyTips = [
    {
      icon: Target,
      title: "Engineering Focus",
      description: "Papers specifically designed to test engineering aptitude and problem-solving skills"
    },
    {
      icon: BookOpen,
      title: "Multi-Section Practice",
      description: "Complete coverage of all ESAT sections with detailed performance breakdowns"
    },
    {
      icon: Calculator,
      title: "Time Management",
      description: "Strategic approaches to handle the challenging time constraints effectively"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-full mb-6">
            <Lock className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            ESAT Mock Papers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exclusive mock papers created by Cambridge engineering graduates. Master the ESAT with 
            comprehensive practice covering all sections and question types.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-200">
              <Link to="/esat" className="no-underline">
                Back to ESAT Overview
              </Link>
            </Button>
            <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-200">
              <Link to="/esat/past-papers" className="no-underline">
                Free Past Papers
              </Link>
            </Button>
          </div>
        </div>

        {/* Access Status */}
        {!hasAccess && (
          <Card className="mb-12 shadow-elegant border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-green-600" />
                Premium Content - Payment Required
              </CardTitle>
              <CardDescription>
                Unlock access to our exclusive mock papers and detailed solutions created by Cambridge engineering graduates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Mock Papers Access</h4>
                  <p className="text-muted-foreground">
                    Get unlimited access to all mock papers, solutions, and engineering guides for £29.99
                  </p>
                </div>
                <Button 
                  onClick={handlePaymentClick}
                  className="bg-gradient-hero hover:opacity-90 text-white border-0 hover:scale-105 transition-all duration-200"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Purchase Access
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Features */}
        <Card className="mb-12 shadow-elegant border-l-4 border-l-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Info className="h-6 w-6 text-blue-600" />
              What Makes Our Mock Papers Special
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {studyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 hover:bg-muted/10 transition-colors duration-200 rounded-lg p-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <tip.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mock Papers by Set */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Mock Papers by Set</h2>
            <p className="text-muted-foreground">
              Each set includes complete papers for all ESAT sections with detailed solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockPapers.map((setData, index) => (
              <Card key={setData.year} className="shadow-elegant hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Calendar className="h-5 w-5 text-green-600" />
                    {setData.year}
                  </CardTitle>
                  <CardDescription>
                    {setData.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {setData.papers.map((paper, paperIndex) => (
                      <div key={paperIndex} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300 gap-3">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="font-medium text-foreground">{paper.name}</span>
                          {paper.restricted && (
                            <Lock className="h-3 w-3 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex gap-2 w-full sm:w-auto">
                          {hasAccess ? (
                            <Button size="sm" variant="outline" className="flex-1 sm:flex-none hover:scale-105 transition-transform duration-200">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          ) : (
                            <>
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
                            </>
                          )}
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
              <h3 className="text-2xl font-bold mb-4">Ready to Excel in Engineering?</h3>
              <p className="mb-6 text-white/90">
                Prepare for the ESAT with the most comprehensive practice available. Created by Cambridge 
                engineering graduates who understand exactly what it takes to succeed.
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
                  <Link to="/team#esat" className="no-underline">Book Personal Tutoring</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ESATMockPapers;