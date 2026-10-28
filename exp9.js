const { MongoClient } = require("mongodb");
// Connection URL and Database Configuration
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "studentDB";
const collectionName = "students";
async function main() {
    try {
        // 1. Connect to MongoDB Server
        await client.connect();
        console.log("Connected to MongoDB successfully!");
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        // 2. Sample Student Data
        const students = [
            {
                studentId: 101,
                name: "Anita",
                department: "CSE",
                subjects: [
                    { subject: "DBMS", marks: 85, grade: "A" },
                    { subject: "AI", marks: 90, grade: "A+" },
                    { subject: "Web Development", marks: 78, grade: "B+" }
                ]
            },
            {
                studentId: 102,
                name: "Rahul",
                department: "CSE",
                subjects: [
                    { subject: "DBMS", marks: 75, grade: "B+" },
                    { subject: "AI", marks: 82, grade: "A" },
                    { subject: "Web Development", marks: 88, grade: "A" }
                ]
            },
            {
                studentId: 103,
                name: "Priya",
                department: "AIML",
                subjects: [
                    { subject: "DBMS", marks: 92, grade: "A+" },
                    { subject: "AI", marks: 95, grade: "A+" },
                    { subject: "Web Development", marks: 89, grade: "A" }
                ]
            },
            {
                studentId: 104,
                name: "Kiran",
                department: "AIML",
                subjects: [
                    { subject: "DBMS", marks: 68, grade: "B" },
                    { subject: "AI", marks: 74, grade: "B+" },
                    { subject: "Web Development", marks: 80, grade: "A" }
                ]
            }
        ];

        // 3. Reset collection and insert fresh data
        await collection.deleteMany({});
        await collection.insertMany(students);
        console.log("Student records inserted successfully!");

        // 4. QUERY 1: Calculate Average Marks for Each Student
        const studentAvgResult = await collection.aggregate([
            {
                $unwind: "$subjects"
            },
            {
                $group: {
                    _id: "$studentId",
                    name: { $first: "$name" },
                    department: { $first: "$department" },
                    averageMarks: { $avg: "$subjects.marks" }
                }
            },
            {
                $project: {
                    _id: 0,
                    studentId: "$_id",
                    name: 1,
                    department: 1,
                    averageMarks: { $round: ["$averageMarks", 2] }
                }
            },
            {
                $sort: { averageMarks: -1 }
            }
        ]).toArray();

        console.log("\n====================================");
        console.log("STUDENT AVERAGE MARKS SUMMARY");
        console.log("====================================");
        console.table(studentAvgResult);

        // 5. QUERY 2: Group by Department & Calculate Department Average
        const deptAvgResult = await collection.aggregate([
            {
                $unwind: "$subjects"
            },
            {
                $group: {
                    _id: "$department",
                    totalStudents: { $addToSet: "$studentId" },
                    departmentAverage: { $avg: "$subjects.marks" }
                }
            },
            {
                $project: {
                    _id: 0,
                    department: "$_id",
                    totalStudentsCount: { $size: "$totalStudents" },
                    departmentAverage: { $round: ["$departmentAverage", 2] }
                }
            },
            {
                $sort: { departmentAverage: -1 }
            }
        ]).toArray();

        console.log("\n====================================");
        console.log("DEPARTMENT-WISE AVERAGE SUMMARY");
        console.log("====================================");
        console.table(deptAvgResult);

    } catch (error) {
        console.error("Error executing queries:", error);
    } finally {
        // Close database connection
        await client.close();
    }
}
main();
