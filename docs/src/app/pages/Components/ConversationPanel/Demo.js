import React from 'react';
// eslint-disable-next-line
import ConversationPanel from 'ringcentral-widget/components/ConversationPanel';

const props = {};
props.replyToReceivers = () => null;
props.recipients = [{}];
props.sendButtonDisabled = false;
props.currentLocale = 'en-US';
props.showSpinner = false;
props.areaCode = 'test string';
props.countryCode = 'test string';
props.dateTimeFormatter = () => null;
props.goBack = () => null;
props.messages = [];
props.brand = 'RingCentral';
props.conversation = {
  conversationMatches: [],
  correspondentMatches: [],
  correspondents: [],
};

/**
 * A example of `ConversationPanel`
 */
const ConversationPanelDemo = () => (
  <div style={{
    position: 'relative',
    height: '500px',
    width: '300px',
    border: '1px solid #f3f3f3',
  }}>
    <ConversationPanel
      {...props}
    />
  </div>
);
export default ConversationPanelDemo;
