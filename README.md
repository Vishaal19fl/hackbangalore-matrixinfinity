# WavePoint. <img src="https://cdn.discordapp.com/attachments/725646168759205929/1238865974510489680/logo2.png?ex=6640d759&is=663f85d9&hm=ec812ce8a48f4a4b97366947520c91b7f31d6399b4f57721f0b9b30ec4cecd27&" alt="Flutter Logo" width="60px" >

WavePoint is a Freelancer platform aims to connect freelancers and clients in an efficient and empowering manner, facilitating project management, collaboration, and skill development. Below you'll find an overview of the features and technologies utilized in our project.

## Technologies Used

- **Frontend:**
  - ReactJS: A JavaScript library for building user interfaces.
  - Vite: A fast development build tool.
  - Cloudinary: For image and video management in the cloud.

- **Backend:**
  - Node.js: A JavaScript runtime for building scalable server-side applications.
  - Express: A web application framework for Node.js.
  - MongoDB: A NoSQL database for storing project and user data.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React Logo" width="100px">  <img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" alt="Mongo Logo" width="100px">  <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt="Mongo Logo" width="100px">
## Features

### For Clients:
- **Project Listing:** Clients can list their projects on the platform and receive proposals from freelancers. The visibility can be increased by featuring job listings.
- **Freelancer Review System:** Clients can review and rate freelancers based on their performance.
- **Multi-Freelancer Teams:** Clients can choose to hire more than one freelancer for their project.
- **Featured Freelancers:** Top talents are provided a dedicated section. Clients can hire these top freelancers who guarantee the best work.

### For Freelancers:
- **Upload Services:** Freelancers can upload services they potentially provide, customizable into a three-tier pricing system.
- **Proposal Submission:** Freelancers can submit proposals for projects posted by clients.
- **Verification and Badges:** Distinguished freelancers receive verification and badges upon reaching certain milestones.
- **Smart Business Card:** NFC and QR code-enabled business card for networking, available for premium plan users.
- **Learning Opportunities:** Access to courses for skill development.
- **Mentoring Sessions:** Learn from successful freelancers through mentoring.
- **Virtual Workshops:** Participate in virtual events and workshops for networking and skill enhancement.

## Empowering Rural Artisans:
- **Authentic Products:** Clients can commission custom, authentic, and traditional products from rural artisans.
- **Middleman Partnership:** Partnering with Self-Help Groups and appointing an intermediary to facilitate communication.
- **Fair Compensation:** The intermediary receives fair compensation for their work.

## Architecture Diagram
  <img src="https://cdn.discordapp.com/attachments/725646168759205929/1238865579725553695/Untitled_19.png?ex=6640d6fb&is=663f857b&hm=4d0e7c6d3274d1f1169ee6ad121ed270c3791e5961b437e8c3f04cc692cc645c&"  >

## Competitor Analysis
  <img src="https://cdn.discordapp.com/attachments/725646168759205929/1238902487306604564/image.png?ex=6640f95a&is=663fa7da&hm=d0df08f7e6e83dbc1b7be9cb0a7869e2884130114f9a8e94ab420bed06642d0c&"  >

## Business Model Canvas
  <img src="https://cdn.discordapp.com/attachments/725646168759205929/1239091221562003517/Red_and_Black_Modern_and_Minimalist_Financial_Projection_Presentation.png?ex=6641a920&is=664057a0&hm=b8cbdd1f7e5d1f969b3f09ba255717d7d898b423abf5e8e6b6173d297b64ab83&"  >

## Smart Business Card
  <img src="https://cdn.discordapp.com/attachments/725646168759205929/1239104252115157002/sbc1.png?ex=6641b543&is=664063c3&hm=e88805eb2d6ec57bf987261a608ad7a3cfb62153a05a5d22577e8c739d2159a2&"  >    
  
---

**Repository Structure:**
| Directory   | Description              |
| ------------- | ------------------------------------- |
| /api   | Houses the backend codebase developed with MongoDB and the server side code with express.js. |
| /client   | Contains the frontend codebase built with React.js. |
| /WavePoint_rfid_Intial   | Contains the code to write data and program the NFC card. |

---
## Getting Started


1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vishaal19fl/hackbangalore-matrixinfinity.git
   ```

2. **Install dependencies:**
   ```bash
   cd hackbangalore-matrixinfinity
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```
   PORT=5173
   MONGO=your-mongodb-uri
   JWT_KEY = randomstring
   VITE_UPLOAD_LINK = "Cloudinary Link Here"
   REACT_APP_GEMINI_API_KEY = your api key here
   ```

4. **Start the backend server:**
   ```bash
   cd api
   yarn start
   ```
   
5. **Start the frontend server:**
   ```bash
   cd client
   yarn dev --host
   ```   

6. **Open your browser:**
   Navigate to http://localhost:5173 to view the application.
   
**Team:**
| Name      | GitHub Username |
| -------------- | --------------- |
| Vishaal Krishna    | @Vishaal19fl    |
| Vishaal S    | @Vishaal-Sathya    |
| Sharvesh  A R   | @Shxrvxshar7     |
| Surya Prakash G  | @PureVodka007 |



---


