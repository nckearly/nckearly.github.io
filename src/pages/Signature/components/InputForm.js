import React, {
    Component,
} from 'react';
import TextField from '@material-ui/core/TextField';
import SelectField from '@material-ui/core/SelectField';
import MenuItem from '@material-ui/core/MenuItem';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unitIdentifier: 'ricro',
        };
    }

    handleNameChange = (event, name) => {
        this.props.handleUpdateName(name);
    }

    handleTitleChange = (event, title) => {
        this.props.handleUpdateTitle(title);
    }

    handleUnitIdChange = (event, index, unitId) => {
        this.props.handleUpdateUnitId(unitId);
    }

    handlePositionChange = (event, position) => {
        this.props.handleUpdatePosition(position);
    }

    handlePhoneChange = (event, phone) => {
        this.props.handleUpdatePhone(phone);
    }

    render() {
        return (
            <section>
                <div className="row">
                    <div className="col-md-6">
                        <TextField
                            onChange={this.handleNameChange}
                            fullWidth
                            floatingLabelText="Name" />
                    </div>
                    <div className="col-md-6">
                        <TextField
                            onChange={this.handleTitleChange}
                            fullWidth
                            hintText="MS, PhD, CIP, etc."
                            floatingLabelText="Title" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <SelectField
                            fullWidth
                            floatingLabelText="Unit Identifier"
                            value={this.props.unitId}
                            onChange={this.handleUnitIdChange}>
                            <MenuItem value="ricro" primaryText="Research Integrity & Compliance Review Office" />
                        </SelectField>
                    </div>
                    <div className="col-md-6">
                        <TextField
                            onChange={this.handlePositionChange}
                            fullWidth
                            hintText="Use line breaks to distinguish between positions"
                            floatingLabelText="Position(s)"
                            multiLine
                            rows={1} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <TextField
                            onChange={this.handlePhoneChange}
                            fullWidth
                            floatingLabelText="Direct Phone"
                            multiLine
                            rows={1} />
                    </div>
                </div>
            </section>
        );
    }
}

export default InputForm;
