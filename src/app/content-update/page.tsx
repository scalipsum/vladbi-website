"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { RefreshCw, CheckCircle, AlertCircle, Home } from "lucide-react";

export default function ContentUpdatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    count?: number;
  } | null>(null);

  const handleRefreshCache = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/refresh-cache", {
        method: "POST",
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message: "Failed to refresh cache",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Content Update
        </h1>
        <p className="text-lg text-muted-foreground">
          Refresh the content cache from Notion without redeploying
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5" />
            Cache Refresh
          </CardTitle>
          <CardDescription>
            This will fetch the latest posts from your Notion database and
            update the local cache. Use this when you&apos;ve made changes in
            Notion and want to see them reflected immediately.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!result && (
            <Button
              onClick={handleRefreshCache}
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Refreshing Cache...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh Content
                </>
              )}
            </Button>
          )}

          {result && (
            <div className="space-y-4">
              <div
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  result.success
                    ? "bg-green-50 border border-green-200 dark:bg-green-950 dark:border-green-800"
                    : "bg-red-50 border border-red-200 dark:bg-red-950 dark:border-red-800"
                }`}
              >
                {result.success ? (
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                )}
                <div className="flex-1">
                  <p
                    className={`font-medium ${
                      result.success
                        ? "text-green-900 dark:text-green-100"
                        : "text-red-900 dark:text-red-100"
                    }`}
                  >
                    {result.success ? "Success!" : "Error"}
                  </p>
                  <p
                    className={`text-sm ${
                      result.success
                        ? "text-green-700 dark:text-green-300"
                        : "text-red-700 dark:text-red-300"
                    }`}
                  >
                    {result.message}
                  </p>
                  {result.success && result.count && (
                    <div className="mt-2">
                      <Badge
                        variant="outline"
                        className="text-green-700 dark:text-green-300"
                      >
                        {result.count} posts cached
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              {result.success && (
                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      View Updated Site
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setResult(null);
                      setIsLoading(false);
                    }}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh Again
                  </Button>
                </div>
              )}

              {!result.success && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setResult(null);
                    setIsLoading(false);
                  }}
                  className="w-full"
                >
                  Try Again
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
