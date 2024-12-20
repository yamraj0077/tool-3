import React from 'react';
    import { utilityRoutes } from '../routes/utility.routes';
    import { ToolList } from '../components/ToolList';
    import { PageHeader } from '../components/common/PageHeader';
    import { Container } from '../components/common/Container';
    import { EmptyState } from '../components/common/EmptyState';
    import { SEOHead } from '../components/SEOHead';

    export function UtilityTools() {
      const hasTools = utilityRoutes.length > 0;

      return (
        <Container>
          <SEOHead title="Utility Tools" description="General purpose tools for everyday tasks" />
          <PageHeader 
            title="Utility Tools"
            description="General purpose tools for everyday tasks"
          />
          {hasTools ? (
            <ToolList routes={utilityRoutes} />
          ) : (
            <EmptyState
              title="Tools Coming Soon"
              description="We're working on adding utility tools. Check back soon!"
            />
          )}
        </Container>
      );
    }
