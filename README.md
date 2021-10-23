# Project 3 - CA ZEV Infrastructure

# Overview
For this project, I compiled and cleaned the data for locations of battery charging and hydrogen fueling stations in California, https://www.energy.ca.gov/files/zev-and-infrastructure-stats-data.

The intent for this project is to provide a site that provides multiple visualizations of the same data in order to benefit both the general public and policymakers.

# ZEV Infrastructure in California
California has established ambitious goals to reduce Greenhouse Gas (GHG) emissions, increase adoption of Zero-emission Vehicles (ZEVs) that run on both battery and hydrogen fuel cell technology, and reduce aggregate Vehicle Miles Traveled (VMT).

One of the primary obstacles to widespread adoption of these vehicles is the difficulty of locating charging and fueling infrastructure, so I created a website that includes both charging and fueling infrastructure locations throughout the state. 

# Data collection
I retrieved data on ZEV infrastructure throughout the state through the California Energy Commission's website. The information is less than two months old. In order to be able to plot locations, I also found a spreadsheet of latitude and longitude by county to merge with the datasets.

# Visualization #1 - Stacked Bar Chart
The stacked bar chart is aligned with the county of location. At a glance, a user can see which counties have a good number of charging and/or fueling stations as well as which counties have a very low number. This chart can help with trip planning, but also help to highlight the counties that need more work to deploy ZEV infrastructure.

# Visualization #2 - Radial Bar Chart
The radial bar chart was made using ApexCharts.js. This chart provides a quick understanding of the numbers statewide.

# Visualization #3 - Location Map
The map provides specific location information based on latitude and longitude. The battery charging stations are marked by a circle marker and the hydrogen fueling stations are marked by the default marker. I also included a pop up for when a user clicks on a marker that will display the county.

