import React from 'react';
import { words } from '../data/words';

const WordList = () => {
  return (
    <div>
      <h1>単語一覧</h1>
      <table>
        <thead>
          <tr>
            <th>英語</th>
            <th>日本語</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              <td>{word.english}</td>
              <td>{word.japanese}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordList;
