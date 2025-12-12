"use client";

export default function FirebaseSetup() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          ⚠️ Firebase Configuration Required
        </h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-800">
            Your Firebase is not configured yet. Follow the steps below to set it up.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Step 1: Create Firebase Project</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Firebase Console</a></li>
              <li>Click &quot;Add project&quot; or select an existing project</li>
              <li>Follow the setup wizard</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Step 2: Add Web App</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>In your Firebase project, click the web icon (&lt;/&gt;)</li>
              <li>Register your app with a nickname</li>
              <li>Copy the firebaseConfig object</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Step 3: Update firebase.js</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm text-gray-600 mb-2">Open <code className="bg-gray-200 px-2 py-1 rounded">auth2/firebase.js</code> and replace the config:</p>
              <pre className="text-xs overflow-x-auto">
{`const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};`}
              </pre>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Step 4: Enable Authentication</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>In Firebase Console, go to <strong>Authentication</strong></li>
              <li>Click <strong>Get Started</strong></li>
              <li>Go to <strong>Sign-in method</strong> tab</li>
              <li>Enable <strong>Email/Password</strong> provider</li>
              <li>Click <strong>Save</strong></li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Step 5: Install Firebase</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm text-gray-600 mb-2">Run this command in your terminal:</p>
              <pre className="text-sm">
{`cd auth2
npm install firebase`}
              </pre>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4">
            <p className="text-green-800">
              ✅ After completing these steps, restart your development server with <code className="bg-green-100 px-2 py-1 rounded">npm run dev</code>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <a 
            href="/"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 inline-block"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}