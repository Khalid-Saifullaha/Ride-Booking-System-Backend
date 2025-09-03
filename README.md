# 🚖 Ride Booking API

A secure, scalable **backend API** for a ride-booking platform built with **Express.js** & **MongoDB (Mongoose)**.
Supports **riders, drivers, and admins** with role-based access, ride management, and driver earnings tracking.

---

## **Features**

### **Authentication & Roles**

- **JWT-based authentication**
- **Roles:** `ADMIN`, `RIDER`, `DRIVER`
- Secure password hashing with **bcrypt**
- Role-based route protection (middleware)

### **Rider Features**

- Request a ride (with pickup & destination location)
- Cancel a ride (if still unaccepted)
- View ride history
- Rate & give feedback to drivers after completed rides

### **Driver Features**

- Accept or reject ride requests
- Update ride status: `PICKED_UP → IN_TRANSIT → COMPLETED`
- View earnings history & total rides
- Set online/offline availability
- Receive ratings from riders

### **Admin Features**

- View all users, drivers, and rides
- Approve/suspend drivers
- Block/unblock users
- Generate reports (future scope)

### **Ride Management**

- Full ride lifecycle tracking with timestamps:
  `REQUESTED → ACCEPTED → PICKED_UP → IN_TRANSIT → COMPLETED`
- Geospatial queries to find **nearby rides**
- Store complete ride history for analytics

---

## **Tech Stack**

- **Node.js** + **Express.js** – API framework
- **MongoDB** + **Mongoose** – Database & ORM
- **JWT** – Authentication
- **bcrypt** – Password hashing
- **Zod** – Request validation
- **TypeScript** – Type safety

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone https://github.com/Khalid-Saifullaha/Ride-Booking-System-Backend.git
cd ride-booking-api
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Configure Environment**

Create a `.env` file:

```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/ride-booking
JWT_SECRET=your_jwt_secret
BCRYPT_SALT_ROUND=10
```

### **4. Run the Server**

```bash
npm run dev
```

---

## **API Endpoints**

### **Auth**

- `POST /user/register` – Register (All roles)
- `POST /auth/login` – Login (All roles)

### **Rider**

- `POST /rides/request` – Request a ride
- `PATCH /rides/:id/cancel` – Cancel a ride
- `GET /rides/me` – View my ride history
- `POST /rides/:id/rate` – Rate driver (after ride completion)

### **Driver**

- `GET /rides/nearby` – Get nearby rides
- `PATCH /rides/:id/accept` – Accept a ride
- `PATCH /rides/:id/status` – Update ride status
- `GET /drivers/earnings` – View earnings

### **Admin**

- `GET /users` – View all users
- `PATCH /drivers/:id/approve` – Approve a driver
- `PATCH /users/:id/block` – Block/unblock a user
- `GET /rides` – View all rides

---

## **Testing with Postman**

1. Import the **Postman collection** from `docs/postman_collection.json`.
2. Test endpoints for:

   - **Rider flow:** Register → Login → Request → Cancel
   - **Driver flow:** Login → Get nearby rides → Accept → Update status → Complete
   - **Admin flow:** Approve drivers, block users, view all rides

---

## **Future Enhancements**

- Real-time ride tracking
- Push notifications for ride updates
- Fare estimation algorithm
- Admin dashboard analytics
