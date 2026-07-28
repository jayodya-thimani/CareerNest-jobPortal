import "../../Styles/admin/Table.css";


function DashboardTable({ jobs }) {


    return (

        <div className="table-container">


            <h2>Recent Jobs</h2>


            <table>


                <thead>

                    <tr>

                        <th>Job Title</th>

                        <th>Company</th>

                        <th>Status</th>

                        <th>Deadline</th>

                    </tr>

                </thead>



                <tbody>


                    {jobs && jobs.length > 0 ? (

                        jobs.map((job) => (

                            <tr key={job._id}>


                                <td>
                                    {job.title}
                                </td>


                                <td>
                                    {job.company}
                                </td>


                                <td>

                                    {job.status || "Active"}

                                </td>


                                <td>

                                    {
                                        job.deadline
                                        ? new Date(job.deadline).toLocaleDateString()
                                        : "Not Available"
                                    }

                                </td>


                            </tr>

                        ))


                    ) : (


                        <tr>

                            <td colSpan="4">
                                No Recent Jobs Found
                            </td>

                        </tr>


                    )}


                </tbody>



            </table>


        </div>

    );

}


export default DashboardTable;