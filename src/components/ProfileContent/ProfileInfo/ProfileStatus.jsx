import React from "react";


class ProfileStatus extends React.Component {

    constructor(props) {
        super(props);
        debugger;
        this.state =  {
            editMode :  false,
            status: this.props.status

        }
    }
    editActiveMode = () => {
        this.setState({
            editMode: true
        });
    }

    deActiveEditMode = () => {
        this.setState({
            editMode: false
        })
        debugger;
        this.props.updateStatus(this.state.status)
    }

    onChangeInput = (e) => {
        debugger
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (<div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={() => this.editActiveMode()}>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                <div>
                    <input type="text" onChange={this.onChangeInput} autoFocus={true} onBlur={() => this.deActiveEditMode()} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;