import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="The World of Concreth"
      description="A D&D 5E World Bible">
      <main style={{padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{fontSize: '3.5rem', fontFamily: 'Cinzel, serif', color: 'var(--ifm-color-primary-darker)', textAlign: 'center'}}>
          The World of Concreth
        </h1>
        <p style={{textAlign: 'center', fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '3rem'}}>
          The omniscient record of the Third Epoch.
        </p>
        
        <hr style={{marginBottom: '3rem'}} />

        <h2>World History: The Shattered Balance</h2>
        <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
          It is general knowledge across the realms that the First Epoch ended in catastrophe. The cosmic locks failed, releasing Wild Magic Storms that tore at the very fabric of reality. Magic became volatile, and darkness encroached on the edges of the world.
        </p>
        <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
          According to legend, a small band of heroes stood against the failing of the light. Avatar Alrick, the Time-Locked Balnan, the arcane master 13, the avenger Aukan, and the infiltrator Darkscale stepped into the void. 
        </p>
        <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
          They successfully stabilized the storms, leading to a safer, albeit magic-scarce, world. From the ashes of their journey, a new Order of All was forged to protect the realm, and the trapped souls of the Lorkhaj were finally restored to the natural cycle. The mark they left on Concreth forever shaped the politics and survival of the current age.
        </p>
        
        <div style={{marginTop: '4rem', padding: '1.5rem', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)', textAlign: 'center'}}>
          <h3 style={{marginTop: 0}}>Adventurer Access</h3>
          <p style={{marginBottom: 0}}>
            <strong>Players:</strong> Please use the specific, private link provided by your Dungeon Master to access your active campaign logs.
          </p>
        </div>
      </main>
    </Layout>
  );
}