import React, { lazy } from 'react';
import { myBiodata } from '../menu';

const LANDING = {
	// DASHBOARD: lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
	BIODATA: lazy(() => import('../pages/presentation/biodata/Biodata')),
};

const presentation = [
	{
		path: myBiodata.biodata.path,
		element: <LANDING.BIODATA />,
	},
];

const contents = [...presentation];

export default contents;
