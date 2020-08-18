import db from '@/lib/firebase-admin';

export default async (_, res) => {
  const sitesRef = db.collection('sites');
  const sites = [];

  const snapshot = await sitesRef.get();
  !snapshot.exists && console.log('No such document!');

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json(sites);
};
