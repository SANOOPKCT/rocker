import { ShieldAlertIcon } from "lucide-react";
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
    ItemActions
} from "@/components/ui/item";

import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
export const UnauthenticatedView = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">

            <div className="w-full max-w-lg bg-muted">
               <Item variant="outline">
                  <ItemMedia variant="icon">
                    <ShieldAlertIcon />
                  </ItemMedia>
                  <ItemContent>
                      <ItemTitle>Unauthenticated</ItemTitle>
                      <ItemDescription>You are not authenticated</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                      <SignInButton>
                        <Button variant="outline" size="sm">
                            Sign In
                        </Button>
                      </SignInButton>
                      
                  </ItemActions>

                </Item> 

            </div>


            
        </div>
            
    );
};