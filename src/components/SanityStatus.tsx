import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const SanityStatus = () => {
  // Simple check to see if Sanity is configured
  const projectId = 'your-project-id'; // This should match your sanity.ts file
  const isConfigured = projectId !== 'your-project-id';

  if (isConfigured) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
          ✅ Sanity CMS Connected
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="shadow-lg border-orange-200 bg-orange-50">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm text-orange-800 flex items-center gap-2">
            <Loader2 className="w-4 h-4" />
            Sanity CMS Setup Required
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-xs text-orange-700 mb-3">
            Connect Sanity CMS for easy content editing. Currently using fallback content.
          </p>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-orange-800 border-orange-300 hover:bg-orange-100 text-xs"
            onClick={() => window.open('/SANITY_SETUP.md', '_blank')}
          >
            View Setup Guide
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SanityStatus;