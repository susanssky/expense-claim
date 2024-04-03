# Travel to Class Expense
## Introduction
Whenever I submitted expense claim information through Google Forms, I was required to repetitively enter my bank details and upload expense receipts.

I desired a platform that could store my bank information, enabling me to view records of my past submissions, as it was possible for myself or other users to have inadvertently entered incorrect data.

I decided to create an expense application using the MERN stack, which would store bank details and utilise the Cloudinary image hosting service to retain receipts. In addition to a user role, I incorporated an admin role to approve expense claims and implemented a feature to download claims as CSV files.

After developing the application, as an end-user, I was able to reduce the repetitive entry of bank details, saving 50% of the time, and easily locate receipt photographs. As an administrator, the dashboard provided a more streamlined experience for approving expense claims compared to Google Forms.

## Features
Users can：
- store bank details
- view receipt photos
- edit or delete their own expense claim data

Administrators can
- approve expense claims and 
- download expense claim data as a CSV file

## Technology stack
- Typescript
- React
- Node
- Express
- MongoDB
- mongoose
- Cloudinary
- react-csv