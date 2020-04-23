import SearchResults from './search_results';
import { connect } from 'react-redux';
import { getResults, clearSearch } from '../../actions/search_actions';
import { openModal, closeModal } from "../../actions/modal_action";

const mapStateToProps = (state) => {
    
    return {
        search: state.search
    }
};
const mapDispatchToProps = (dispatch, { location }) => {
    
    return {
    openModal: (modal, pinId) => dispatch(openModal(modal, { pinId })),

    getAllResults: (query) => dispatch(getResults(query)),
    clearSearch: () => dispatch(clearSearch())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);