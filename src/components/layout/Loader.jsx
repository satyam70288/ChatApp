import React from 'react';
import { Grid, Skeleton } from '@mui/material';

 export const LayoutLoader = () => {
    return (
        <Grid container style={{ height: "calc(100vh - 4rem)" }}>
            <Grid item sm={4} md={3} sx={{ display: { xs: "none", sm: "block" }, height: "100%", bgcolor: "primary.main" }}>
                <Skeleton variant="rectangular" />
            </Grid>
            <Grid item xs={12} sm={8} md={5} lg={6} sx={{ height: "100%", bgcolor: "primary.main" }}>
                <Skeleton variant="rectangular" />
            </Grid>
            <Grid item md={4} lg={3} sx={{
                display: { xs: "none", md: "block" },
                height: "100%"
            }}>
                <Skeleton variant="rectangular" />
            </Grid>
        </Grid>
    );
};

