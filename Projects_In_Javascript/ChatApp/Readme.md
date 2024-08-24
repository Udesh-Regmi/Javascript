
---

# Real-Time Chat Application

Welcome to the Real-Time Chat Application! This project is a sleek and modern chat app built using Node.js, Express, and Socket.IO, with a beautiful frontend styled with Tailwind CSS. It's designed to offer a seamless messaging experience with a simple and intuitive interface.

## 🚀 Features

- **Real-Time Messaging**: Communicate instantly with other users.
- **Elegant User Interface**: Enjoy a clean, responsive design thanks to Tailwind CSS.
- **Personalized Messaging**: Messages from the current user are distinctly styled for easy identification.

## 🌟 Getting Started

Ready to dive in? Follow these steps to get the chat application up and running on your local machine:

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed. If not, [install Node.js](https://nodejs.org/) first.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Udesh-Regmi/Javascript/tree/main/Projects_In_Javascript/ChatApp
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd <project-directory>
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

### Running the Application

1. **Start the Server**:

   ```bash
   npm start
   ```

   By default, the server runs on `http://localhost:3000`. You can customize the port by setting the `PORT` environment variable.

2. **Open in Browser**:

   Navigate to `http://localhost:3000` to start chatting!

### 📁 File Structure

- **`index.js`**: The core Node.js server file that sets up Express and Socket.io for real-time messaging.
- **`public/index.html`**: The frontend HTML file styled with Tailwind CSS to provide a modern look and feel.

### ⚙️ How It Works

- **Server (index.js)**:
  - Configures an Express server to serve static files from the `public` directory.
  - Utilizes Socket.IO for real-time bidirectional communication.
  - Handles `chatMessage` events and broadcasts them to all connected clients.

- **Client (public/index.html)**:
  - Connects to the Socket.IO server.
  - Sends and receives messages in real-time.
  - Differentiates messages from the current user with distinctive styles for a better chat experience.

### 📦 Dependencies

- **`express`**: A minimalist web framework for Node.js.
- **`socket.io`**: Facilitates real-time, bidirectional communication.
- **`tailwindcss`**: A utility-first CSS framework for building responsive designs.

### 🚧 Troubleshooting

- Ensure all dependencies are installed correctly.
- Check the server logs and browser console for any error messages.

Enjoy chatting with friends and colleagues in real-time! If you have any questions or need assistance, feel free to reach out.

---

Feel free to adjust any sections to better fit your preferences or add any additional details relevant to your project.