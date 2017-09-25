import { connect } from 'react-redux';
import ContactsView from '../../components/ContactsView';

function mapToProps(_, {
  locale,
  contactSearch,
}) {
  return {
    currentLocale: locale.currentLocale,
    contactSourceNames: contactSearch.contactSourceNames || [],
    contactGroups: contactSearch.contactGroups || [],
    searchSource: contactSearch.searchCriteria && contactSearch.searchCriteria.sourceName,
    searchText: contactSearch.searchCriteria && contactSearch.searchCriteria.searchText,
    currentPage: contactSearch.searchCriteria && contactSearch.searchCriteria.pageNumber,
    showSpinner: !(
      locale.ready &&
      contactSearch.ready
    ),
  };
}

function mapToFunctions(_, {
  router,
  contacts,
  contactSearch,
}) {
  return {
    getAvatarUrl: async (contact) => {
      // const avatarUrl = await contacts.getImageProfile(contact);
      // return avatarUrl;
      return null;
    },
    getPresence: async (contact) => {
      const presence = await contacts.getPresence(contact);
      return presence;
    },
    onItemSelect: ({ type, id }) => {
      router.push(`/contacts/${type}/${id}`);
    },
    onRestSearch: () => {
      contactSearch.resetSearchStatus();
    },
    onSearchContact: ({ searchSource, searchText, pageNumber }) => {
      contactSearch.searchPlus({
        sourceName: searchSource,
        searchText,
        pageNumber,
      });
    },
  };
}

const ContactsPage = connect(mapToProps, mapToFunctions)(ContactsView);

export default ContactsPage;