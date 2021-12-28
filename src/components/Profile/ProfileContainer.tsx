import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootReducerType} from "../../Redux/redux-store";
import {getStatus, getUserProfile, ProfileType, savePhoto, updateStatus} from "../../Redux/profilePage-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {
    getAuthSelector,
    getIdSelector,
    getProfileSelector,
    getStatusSelector
} from "../../Redux/selectors/profile-selectors";


type mapStateToPropsType = {
    profile: null | ProfileType
    status: string
    id: number | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto:(photo: File | null) => void
}
type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType
type OwnPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<OwnPropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.id!)
            // if (userId) {
            //     this.props.history.push('/login') // системный редирект (не желателен, потому что вмешиваемся в жизненный цикл компоненты// )
            // }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<OwnPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        // eslint-disable-next-line no-self-compare
        // if (this.props.match.params.userId !== this.props.match.params.userId) {
        this.refreshProfile()
        //}
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state: RootReducerType): mapStateToPropsType => ({
    profile: getProfileSelector(state),
    status: getStatusSelector(state),
    id: getIdSelector(state),
    isAuth: getAuthSelector(state)
})


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)