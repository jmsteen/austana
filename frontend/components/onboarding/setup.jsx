const Setup = (props) => {
    return <div className="setup-form">
            <h2>Let's get you setup</h2>
        <form>
            <label>Your full name
                <input type="text"/>
            </label>
            <label>What is your team called?
                <input type="text"/>
            </label>
            <button>Submit</button>
        </form>
    </div>
}

export default Setup;