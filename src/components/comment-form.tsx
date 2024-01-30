interface Props {
    position: {
        top: number,
        left: number
    }
    showModal: boolean
    setShowModal: (open: boolean) => void
    setComment: (comment: string) => void
    handleReactionSubmit: () => void
}
const CommentForm = ({ position, showModal, setShowModal, setComment, handleReactionSubmit }: Props) =>
    showModal ? (
        <div style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
        }}>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <input
                                type="text"
                                placeholder="Enter your comment"
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full border rounded p-2"
                            />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleReactionSubmit}
                            >
                                Save Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null


export default CommentForm
