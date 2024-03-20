import FAQ1 from '../../img/FAQ1.png';
import FAQ2 from '../../img/FAQ2.png';
import FAQ3 from '../../img/FAQ3.png';
import FAQ4 from '../../img/FAQ4.png';

function faqData() {
  return [
    {
      number: '1',
      title: 'WHAT IS AN NFT COLLECTION?',
      description:
        'An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.',
      image: FAQ1,
    },
    {
      number: '2',
      title: 'HOW DO I PURCHASE NFTS FROM A COLLECTION?',
      description:
        'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.',
      image: FAQ2,
    },
    {
      number: '3',
      title: 'CAN I SELL OR TRADE NFTS FROM A COLLECTION?',
      description:
        'Yes, you can sell or trade NFTs from a collection like you would other digital assets.',
      image: FAQ3,
    },
    {
      number: '4',
      title: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?',
      description: `As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.`,
      image: FAQ4,
    },
  ];
}

export default faqData;
