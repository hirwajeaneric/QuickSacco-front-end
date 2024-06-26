const FeedBack = () => {
    return (
        <section id="benefits" className="px-5 mx-auto flex-1 pt-24 pb-0">
            <div className="md:container mx-auto flex flex-wrap justify-between items-center">
                <div className="right w-full md:w-[49%] flex flex-col">
                    <span className="font-bold">Feedback</span>
                    <h1 className="text-3xl font-bold mt-3 mb-7">Short feed back period</h1>
                    <p className="text-slate-700">Fill your application form, provide all information related to your application
                        including the needed loan, add attachments such as your work contract and copy of National ID.
                        <br /><br />
                        Once you have submitted your application, you will recieve an email that contains a confirmation for the reception of
                        your application.
                        <br />
                        We shall reach you often updating you more about the progress of your application.
                        In case we need specific documents, you will be able to get more information through email updates.
                        <br /><br />
                        You can even get more about the progress of your application throught your account.
                    </p>
                </div>
                <div className="left w-full md:w-[49%]">
                    <img src="progress2.png" loading="lazy" className="w-3/4 mx-auto mb-10" alt="Apply here" />
                </div>
            </div>
        </section>
    )
}

export default FeedBack