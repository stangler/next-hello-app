#!/usr/bin/env node

/**
 * ESLint DEBUGオプション用スクリプト
 * 詳細ログ出力による問題特定
 */

import { execSync } from 'child_process';

/**
 * DEBUGオプション付きでESLintを実行
 * 詳細な処理ログを出力して問題を特定
 */
function runESLintWithDebug() {
  try {
    console.log('ESLint DEBUGモードで実行（詳細ログ出力）');
    console.log('=================================================');

    // DEBUG環境変数を設定してESLintを実行
    const result = execSync('DEBUG=eslint:* eslint .', {
      encoding: 'utf8',
      stdio: 'inherit'
    });

    console.log('DEBUG分析完了');
    return result;
  } catch (error) {
    console.error('ESLint実行中にエラーが発生しました:', error.message);
    process.exit(1);
  }
}

// 実行
runESLintWithDebug();
