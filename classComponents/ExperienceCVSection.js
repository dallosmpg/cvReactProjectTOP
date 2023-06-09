import React, {Component} from "react";

export default class ExperienceCVSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isHovered: false,
        }
    }

    render() {
        const { data, addSection, deleteSection } = this.props;
        const inputData = data.inputStates ? data.inputStates : data;
        const toggleFormVis = data.toggleFormVis;

        const workData = {
            companyName: 'The name of the company',
            positionTitle: 'The title of your position there',
            roleDescription: 'The description of your role',
            startOfWork: 'Start of work',
            finishOfWork: 'Finish of work',
        }

        if (Array.isArray(inputData)) {
            inputData.forEach((input) => {
              if (input.for === 'company-name') workData.companyName = input.text;
              if (input.for === 'position-title') workData.positionTitle = input.text;
              if (input.for === 'role-description') workData.roleDescription = input.text;
              if (input.for === 'start-of-work')
                workData.startOfWork = input.text;
            if (input.for === 'finish-of-work')
            workData.finishOfWork = input.text;
            });
          }
      

        return (
            <section onMouseEnter={() => this.setState({isHovered: true})} onMouseLeave={() => this.setState({isHovered: false})} className="workExp-CV-section CV-content-section">
                <div className="content center-column">
                    <div className="center-column">
                        <h3>{workData.companyName}</h3>
                        <h3>{workData.positionTitle}</h3>
                    </div>
                    <h4>{workData.roleDescription}</h4>
                </div>
                <div className="date center-column">
                    <h4>{workData.finishOfWork}</h4>
                    -
                    <h4>{workData.startOfWork}</h4>
                </div>
                <div className={this.state.isHovered ? 'buttons' : 'buttons hidden'}>
                    <button onClick={() => {
                        if (!toggleFormVis) return;
                        toggleFormVis();
                    }}>Edit this section</button>
                    <button onClick={() => addSection('work')}>Add new section</button>
                    <button onClick={() => deleteSection('work')}>Delete section</button>
                </div>
            </section>
        )
    }
}