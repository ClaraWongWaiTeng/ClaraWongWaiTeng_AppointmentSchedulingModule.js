let appointments = [
    {
        id: 1,
        patientName: "John Doe",
        doctorName: "Dr Smith",
        date: "2026-05-20",
        time: "10:00 AM",
        status: "Scheduled"
    },

    {
        id: 2,
        patientName: "Alice Tan",
        doctorName: "Dr Brown",
        date: "2026-05-21",
        time: "2:00 PM",
        status: "Scheduled"
    }
];

module.exports = {
    // Creates new appointment
    async createAppointment(patientName, doctorName, date, time) {
        try{
            await appointments.push({
                id: appointments.length + 1,
                patientName: patientName,
                doctorName: doctorName,
                date: date,
                time: time,
                status: "Scheduled"
            })
            return `Appointment has been scheduled`
        }
        catch (e) {
            console.log(e.message);
            throw new Error(`Appointment has not been scheduled`);
        }
    },
    // Returns all appointments
    async getAppointments(){
        try {
            return appointments;
        }
        catch (e) {
            console.log(e.message);
            throw new Error("Error retrieving appointments");
        }
    },
    // Updates an appointment by id
    async updateAppointment(id, updates) {
        try {
            let appointment = appointments.find(
                appt => appt.id === Number(id)
            );
            if (!appointment) {
                return "Unable to find record to update.";
            }
            Object.assign(appointment, updates);
            return "Record is updated!";
        }
        catch(e) {
            console.log(e.message);
            throw new Error("Error updating appointment");
        }
    },
    // Deletes an appointment by id
    async deleteAppointment(id) {
        try {
            let index = appointments.findIndex(
                appt => appt.id === Number(id)
            );

            if (index === -1) {
                return "Unable to find a record to delete.";
            }

            appointments.splice(index, 1);

            return "Record is deleted!";
        }
        catch (e) {
            console.log(e.message);
            throw new Error("Error deleting appointment");
        }
    },
    // Search appointments by doctor
    async searchByDoctor(doctor) {
        try {
                let doctorappointments = appointments.filter(
                    appt => appt.doctorName === doctor
                );
                if (doctorappointments.length === 0) {
                    return `No Doctor Appointments`
                }
                return doctorappointments;
        } catch (e) {
            console.log(e.message);
            throw new Error("Error finding appointments");
        }
    }
}

module.exports.createAppointment("Mary Lim", "Dr Tan", "2026-05-22", "10:00 AM");
// console.log(appointments);

console.log(module.exports.getAppointments());

module.exports.updateAppointment(2, {doctorName:"Dr Tan"})

console.log(module.exports.getAppointments());

console.log(module.exports.searchByDoctor("Dr Tan"));

module.exports.deleteAppointment(3);

console.log(module.exports.getAppointments());

console.log(module.exports.searchByDoctor("Dr Tan"));
console.log(module.exports.searchByDoctor("Dr Brown"));
