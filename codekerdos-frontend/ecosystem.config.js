module.exports = {
  apps: [
    {
      name: "nextjs-app", // Name of your application
      script: "npm", // Use npm as the script runner
      args: "run dev", // Run the `start` script
      cwd: "./", // Path to your project
      instances: 1, // Use the maximum number of instances (optional)
      autorestart: true, // Automatically restart the app if it crashes
      watch: false, // Disable file watching (optional)
      // max_memory_restart: "1G", // Restart if memory usage exceeds 1GB (optional)
      env: {
        NODE_ENV: "production", // Set environment to production
      },
    },
  ],
};
