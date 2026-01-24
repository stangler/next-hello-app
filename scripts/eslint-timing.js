#!/usr/bin/env node

/**
 * ESLint TIMINGオプション用スクリプト
 * パフォーマンスボトルネックを特定するための実行時間測定
 */

import { execSync } from 'child_process';

/**
 * TIMINGオプション付きでESLintを実行
 * @param {number} [limit=10] - 表示する上位ルール数（10以下: 上位10個, 11以上: 指定数, 'all': 全て）
 */
function runESLintWithTiming(limit = 10) {
  try {
    console.log(`ESLint TIMINGモードで実行（上位${limit}個のルールを表示）`);
    console.log('=================================================');

    // TIMING環境変数を設定してESLintを実行
    const result = execSync(`TIMING=${limit} eslint .`, {
      encoding: 'utf8',
      stdio: 'inherit'
    });

    console.log('TIMING分析完了');
    return result;
  } catch (error) {
    console.error('ESLint実行中にエラーが発生しました:', error.message);
    process.exit(1);
  }
}

// コマンドライン引数から制限数を取得
const args = process.argv.slice(2);
const limit = args.length > 0 ? args[0] : 10;

// 実行
runESLintWithTiming(limit);
