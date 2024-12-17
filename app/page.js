import Calendar from "@/components/calendar/Calendar";
import Search from "@/components/search/Search";

export default function Home() {
    return (
        <main className="overflow-hidden h-fit p-2 ">
            <section className="p-2">
                <div className="grid grid-cols-2 mt-4 mb-2">
                    <Search />
                </div>

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
                <Calendar />
            </section>
        </main>
    );
}
