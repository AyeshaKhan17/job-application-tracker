function DashboardStats({ jobs }) {

    const total = jobs.length;
    const applied = jobs.filter(j => j.status === "Applied").length;
    const interview = jobs.filter(j => j.status === "Interview").length;
    const offer = jobs.filter(j => j.status === "Offer").length;
    const rejected = jobs.filter(j => j.status === "Rejected").length;

    const stats = [
        { label: "Total", value: total },
        { label: "Applied", value: applied },
        { label: "Interview", value: interview },
        { label: "Offer", value: offer },
        { label: "Rejected", value: rejected }
    ];

    return (
        <div className="grid grid-cols-5 gap-4 mb-8">

            {stats.map((s, i) => (
                <div
                    key={i}
                    className="bg-white p-4 rounded-lg shadow"
                >
                    <p className="text-gray-500 text-sm">
                        {s.label}
                    </p>

                    <p className="text-2xl font-bold">
                        {s.value}
                    </p>
                </div>
            ))}

        </div>
    );
}

export default DashboardStats;