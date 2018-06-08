import React from 'react';
import PropTypes from 'prop-types';
import { Highlight, connectHits } from 'react-instantsearch-dom';

const data = {
  Contact: {
    title: 'Contacts',
    columns: [
      {
        attribute: 'Name',
        title: 'Name',
        isHighlighted: true,
      },
      {
        attribute: 'Account',
        title: 'Account',
        isHighlighted: true,
      },
      {
        attribute: 'Email',
        title: 'Email',
        isHighlighted: true,
      },
    ],
  },
  Opportunity: {
    title: 'Opportunities',
    columns: [
      {
        attribute: 'Name',
        title: 'Name',
        isHighlighted: true,
      },
      {
        attribute: 'Account',
        title: 'Account',
        isHighlighted: true,
      },
      {
        attribute: 'Owner',
        title: 'Owner',
        isHighlighted: true,
      },
      {
        attribute: 'CloseDate',
        title: 'Close date',
        isHighlighted: false,
      },
      {
        attribute: 'StageName',
        title: 'Stage name',
        isHighlighted: false,
      },
      {
        attribute: 'Amount',
        title: 'Amount',
        isHighlighted: false,
      },
    ],
  },
  Account: {
    title: 'Accounts',
    columns: [
      {
        attribute: 'Name',
        title: 'Name',
        isHighlighted: true,
      },
      {
        attribute: 'Website',
        title: 'Website',
        isHighlighted: true,
      },
      {
        attribute: 'Owner',
        title: 'Owner',
        isHighlighted: true,
      },
    ],
  },
  Lead: {
    title: 'Leads',
    columns: [
      {
        attribute: 'Name',
        title: 'Name',
        isHighlighted: true,
      },
      {
        attribute: 'Email',
        title: 'Email',
        isHighlighted: true,
      },
      {
        attribute: 'Owner',
        title: 'Owner',
        isHighlighted: true,
      },
    ],
  },
};

const Hits = ({ hits }) => {
  const tables = hits.reduce(
    (acc, hit) => ({
      ...acc,
      [hit.type]: acc[hit.type] ? acc[hit.type].concat(hit) : [hit],
    }),
    {}
  );

  return (
    <div className="ais-Hits">
      {Object.entries(tables).map(([type, rows]) => (
        <div key={type} className="hit">
          <h2>{data[type].title}</h2>
          <div className="table-responsive">
            <table>
              <tbody>
                <tr>
                  {data[type].columns.map(({ title }) => (
                    <th key={title}>{title}</th>
                  ))}
                </tr>
                {rows.map(row => (
                  <tr key={row.objectID}>
                    {data[type].columns.map(({ attribute, isHighlighted }) => (
                      <td key={attribute}>
                        {isHighlighted ? (
                          <Highlight attribute={attribute} hit={row} />
                        ) : (
                          <span>{row[attribute]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr />
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

Hits.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connectHits(Hits);
