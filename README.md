
---

# **Tekly - Tech News Website**

**Tekly** is a modern, fully functional tech news website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides an engaging platform for users to stay updated on the latest technology trends, articles, and news. The website supports multiple languages, includes admin approval for user registration, and integrates a simple subscription system.

---

## **Features**
- **User Authentication**: Login and registration system with JWT-based authentication.
- **Multi-Language Support**: Supports multiple languages, including Albanian, with `react-i18next` for localization.
- **News Management**: Admin users can post, edit, and delete news articles.
- **User Dashboard**: Personalized dashboard for users to view their articles and settings.
- **Responsive Design**: Fully responsive UI that adapts to all screen sizes.

---

## **Technologies Used**
- **Frontend**:
  - React.js
  - React Router
  - Axios for HTTP requests
  - react-i18next for internationalization
  - Styled with custom CSS
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for database storage
  - JWT for user authentication
- **Deployment**:
  - Deployed using **Heroku** for backend
  - Frontend hosted on **Netlify**

---

## **Installation Instructions**

### **Frontend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tekly.git
   cd tekly/client
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

   The frontend will be running on `http://localhost:3000`.

### **Backend Setup**
1. Navigate to the backend directory:
   ```bash
   cd tekly/server
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   - `MONGO_URI`: MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT token generation
   - `PORT`: Port for the server (default: 5000)

4. Run the server:
   ```bash
   npm start
   ```

   The backend will be running on `http://localhost:5000`.

---

## **Features Walkthrough**

### **HomePage**
- View the latest tech articles, news, and trends.
- Subscribe to the newsletter for daily updates.

### **Dashboard**
- After logging in, you get a personalized dashboard.
- View and manage your profile information, and see your latest posts.

### **Post News**
- Admins can post new tech news articles via the **Post News** form.
- The news articles will be displayed in the homepage section.

### **Login & Registration**
- Secure login and registration system using JWT tokens.
- User data is stored securely, with password hashing.

---

## **Contributing**
If you'd like to contribute to **Tekly**, feel free to fork the repository and submit a pull request. Here's how you can contribute:
1. Fork the repository
2. Create a new branch for your changes
3. Commit your changes
4. Push the changes and open a pull request

---

## **License**
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Screenshots**
![Home Page](https://via.placeholder.com/1200x600.png?text=Home+Page)  
*Example of the homepage displaying the latest tech news.*

---

## **Contact**
For any inquiries, you can reach out to me via [your-email@example.com].

---

### **Acknowledgements**
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [react-i18next](https://react.i18next.com/)

---

