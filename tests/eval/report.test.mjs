import assert from 'node:assert';
import { generateReport } from '../../eval/report.mjs';

function testBasicReport() {
  const out = generateReport({ mae: 0.5, rmse: 0.7, spearman: 0.9 });
  assert.ok(out.includes('# Evaluation Report'), 'Must contain header');
  assert.ok(out.includes('MAE: 0.5'), 'Must contain MAE');
  assert.ok(out.includes('RMSE: 0.7'), 'Must contain RMSE');
  assert.ok(out.includes('Spearman: 0.9'), 'Must contain Spearman');
  console.log('PASS: testBasicReport');
}

function testReportWithF1() {
  const out = generateReport({ mae: 0.25, rmse: 0.35, spearman: 0.95, f1: 0.88 });
  assert.ok(out.includes('MAE: 0.25'));
  assert.ok(out.includes('F1: 0.88'));
  console.log('PASS: testReportWithF1');
}

function testReportWithCategories() {
  const metrics = {
    mae: 0.5,
    rmse: 0.7,
    spearman: 0.9,
    f1: 0.8,
    categories: {
      identity: { mae: 0.4, rmse: 0.5 },
      hygiene: { mae: 0.6, rmse: 0.8 }
    }
  };
  const out = generateReport(metrics);
  assert.ok(out.includes('identity'), 'Must list identity category');
  assert.ok(out.includes('hygiene'), 'Must list hygiene category');
  console.log('PASS: testReportWithCategories');
}

function testReportWithCustomTitleAndMetadata() {
  const out = generateReport(
    { mae: 0.5, rmse: 0.7, spearman: 0.9 },
    { title: 'Baseline Run', timestamp: '2026-08-25T12:00:00Z', notes: 'Test notes' }
  );
  assert.ok(out.includes('# Baseline Run'));
  assert.ok(out.includes('2026-08-25T12:00:00Z'));
  assert.ok(out.includes('Test notes'));
  console.log('PASS: testReportWithCustomTitleAndMetadata');
}

function testReportWithEmptyMetrics() {
  const out = generateReport({});
  assert.ok(out.includes('MAE: 0'));
  console.log('PASS: testReportWithEmptyMetrics');
}

try {
  testBasicReport();
  testReportWithF1();
  testReportWithCategories();
  testReportWithCustomTitleAndMetadata();
  testReportWithEmptyMetrics();
  console.log('PASS: all report engine tests passed');
} catch (e) {
  console.error('FAIL:', e.message);
  process.exitCode = 1;
}
