import AgentSchedule from "@/components/agent-schedule/AgentSchedule";
import AgentName from "@/components/agent-name/AgentName";
import { usersData } from "@/data/data";

export default function Home() {
    return (
        <main className="overflow-hidden h-fit p-2 bg-slate-100">
            <section className="border-r-8 border-2 p-2">
                <div className="flex gap-5 text-sm">
                    <div className="flex flex-row align-middle gap-1">
                        <input
                            type="radio"
                            id="all"
                            name="lob"
                            value="all"
                            defaultChecked={true}
                        />
                        <label htmlFor="all">All</label>
                    </div>
                    <div className="flex flex-row align-middle gap-1">
                        <input
                            type="radio"
                            id="shared"
                            name="lob"
                            value="shared"
                        />
                        <label htmlFor="shared">Shared</label>
                    </div>
                    <div className="flex flex-row align-middle gap-1">
                        <input type="radio" id="bpo" name="lob" value="bpo" />
                        <label htmlFor="bpo">BPO</label>
                    </div>
                </div>
                <div className="text-sm">
                    <div className="grid grid-cols-6 gap-2 mr-4">
                        {usersData.map((user) => (
                            <AgentName key={user.id} data={user} />
                        ))}
                    </div>
                    <div className="h-[85vh] overflow-y-auto grid grid-cols-6 gap-2">
                        {usersData.map((user) => (
                            <AgentSchedule key={user.id} data={user} />
                        ))}
                    </div>
                    {/* <div className="flex flex-row justify-end gap-4 pr-10 text-md">
                        <button>prev</button>
                        <button>1</button>
                        <button>2</button>
                        <button>next</button>
                    </div> */}
                </div>
            </section>
        </main>
    );
}
