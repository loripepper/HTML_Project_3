# ZEV Infrastructure in California

California has established ambitious goals to reduce Greenhouse Gas (GHG) emissions, increase adoption of Zero-emission Vehicles (ZEVs) that run on both battery and hydrogen fuel cell technology, and reduce aggregate Vehicle Miles Traveled (VMT).

One of the primary obstacles to widespread adoption of these vehicles is the difficulty of locating charging and fueling infrastructure, so I created a website that includes both charging and fueling infrastructure locations throughout the state. 

# Data collection

I retrieved data on ZEV infrastructure throughout the state through the California Energy Commission's website. The information is less than two months old. In order to be able to plot locations, I also found a spreadsheet of latitude and longitude by county to merge with the datasets.

I cleaned the data in a Jupyter Notebook using Pandas to create one large dataset. There are 147 entries which fulfills the requirement to have a dataset with more than 100 entries.
